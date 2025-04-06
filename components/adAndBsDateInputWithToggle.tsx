import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";
import { ADToBS, BSToAD } from "bikram-sambat-js";
import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export default function AdAndBsDateInputWithToggle(props: any) {
  const { value: initialAdDate, onChange } = props;
  const [isAdToggled, setAdToggled] = useState(true);
  const [adDate, setAdDate] = useState<string>(initialAdDate || "");
  const [bsDate, setBsDate] = useState<string>("");

  useEffect(() => {
    setBsDate(initialAdDate !== "" ? ADToBS(adDate) : "");
  }, []);

  const toggleClick = () => {
    if (adDate == "" && isAdToggled) {
      const today = new Date().toISOString().split("T")[0];
      setAdDate(today);
      setBsDate(ADToBS(today));
      onChange(today);
    }
    setAdToggled(!isAdToggled);
  };

  return (
    <div className="grid grid-row">
      <div className=" relative ">
        {!isAdToggled && (
          <NepaliDatePicker
            inputClassName={cn(
              "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-2xs transition-[color,box-shadow] outline-hidden file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            )}
            className="flex-1 w-full"
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
            className="w-full"
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
          className="absolute right-1 top-1.5 h-6"
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
