import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { ADToBS, BSToAD } from "bikram-sambat-js";
import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { Popover } from "./ui/popover";
import { CalendarIcon } from "lucide-react";

export default function AdAndBsDateInputWithToggle(props: any) {
  const { value: initialAdDate, onChange } = props;
  const [isAdToggled, setAdToggled] = useState(true);
  const [adDate, setAdDate] = useState<string>(initialAdDate || "");
  const [bsDate, setBsDate] = useState<string>("");
  const todayAD = new Date().toISOString().split("T")[0];
  const todayBS = ADToBS(todayAD);
  const todayBSYear = parseInt(todayBS.split("-")[0]);
  useEffect(() => {
    setBsDate(initialAdDate !== "" ? ADToBS(adDate) : "");
  }, []);

  const toggleClick = () => {
    if (adDate == "" && isAdToggled) {
      setAdDate(todayAD);
      setBsDate(todayBS);
      onChange(todayAD);
    }
    setAdToggled(!isAdToggled);
  };

  return (
    <div className="grid grid-row">
      <div className=" relative ">
        {!isAdToggled && (
          <NepaliDatePicker
            inputClassName={cn(
              "h-7 w-full min-w-35 rounded-md border border-input bg-input/20 px-2 py-0.5 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 md:text-xs/relaxed dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
            )}
            minYear={2080}
            maxYear={todayBSYear}
            className="flex-1"
            onChange={(value: string) => {
              var newAdDate = BSToAD(value);
              setBsDate(value);
              setAdDate(newAdDate);
              onChange(newAdDate == "" ? null : newAdDate);
            }}
            value={bsDate}
            options={{ calenderLocale: "ne", valueLocale: "en" }}
          />
        )}
        {isAdToggled && (
          <Input
            type="date"
            className="min-w-35"
            style={{ paddingRight: "30px" }}
            {...props}
            onChange={(e) => {
              var newAdDate: string =
                e.target.value == ""
                  ? ""
                  : new Date(e.target.value).toISOString().split("T")[0];

              setAdDate(newAdDate);
              setBsDate(newAdDate == "" ? "" : ADToBS(newAdDate));
              onChange(newAdDate == "" ? null : newAdDate);
            }}
            value={adDate}
          />
        )}
        <Toggle
          size={"sm"}
          variant={"outline"}
          className="absolute right-1 top-1 h-5 w-6"
          pressed={isAdToggled}
          onPressedChange={toggleClick}
        >
          {isAdToggled ? "BS" : "AD"}
        </Toggle>
      </div>
      <div>
        {isAdToggled && adDate !== "" && adDate && (
          <Badge variant={"outline"}>
            {new Date(adDate).toString().split(" ")[0]}
            {"-"}
            {bsDate}
          </Badge>
        )}
        {!isAdToggled && bsDate !== "" && (
          <Badge variant={"outline"}>
            {new Date(adDate).toString().split(" ")[0]}
            {"-"}
            {new Date(adDate).toISOString().split("T")[0]}
          </Badge>
        )}
      </div>
    </div>
  );
}
