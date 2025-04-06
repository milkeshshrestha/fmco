// NepaliDatePickerWrapper.tsx
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import "nepali-datepicker-reactjs/dist/index.css";
interface NepaliDatePickerWrapperProps extends ControllerRenderProps<any> {}

const NepaliDatePickerWrapper: React.FC<NepaliDatePickerWrapperProps> = (
  props
) => {
  const { value, onChange, name } = props;

  const datePickerContainerRef: MutableRefObject<HTMLDivElement | null> =
    useRef(null);
  let datePickerContainer: HTMLDivElement | null;
  let datePickerInput: HTMLInputElement | null | undefined;
  const customInputContainerRef = useRef<HTMLInputElement>(null);

  const { setValue, trigger } = useFormContext(); // Access setValue and trigger from useFormContext
  useEffect(() => {
    datePickerContainer = datePickerContainerRef.current;
    datePickerInput = datePickerContainer?.querySelector("input");
    //datePickerInput!.style.display = "none";
    //following is important step
    (datePickerContainer as any).datePickerInput = datePickerInput;
  }, []);
  const handleChangeInNepaliDatePicker = (date: string) => {
    customInputContainerRef.current!.querySelector("input")!.value = date;
    setValue(name, date, { shouldValidate: true, shouldDirty: false }); // Update form state with validation
    trigger(name);
  };
  const simulateEvent = (eventType: string) => {
    const container = datePickerContainerRef.current;
    if (container && (container as any).datePickerInput) {
      const datePickerInput = (container as any)
        .datePickerInput as HTMLInputElement;
      const event = new Event(eventType, {
        bubbles: true,
        cancelable: true,
      });
      datePickerInput.dispatchEvent(event);
      //console.log(`${eventType} event dispatched`);
    }
  };

  return (
    <div>
      <div ref={customInputContainerRef} id="customNepaliDatePickerContainer">
        <Input
          {...props}
          onChangeCapture={(e) =>
            handleChangeInNepaliDatePicker(e.currentTarget.value)
          }
          onClick={() => simulateEvent("click")}
        />
      </div>
      <div ref={datePickerContainerRef}>
        <NepaliDatePicker
          onChange={handleChangeInNepaliDatePicker}
          options={{ calenderLocale: "en", valueLocale: "en" }}
        />
      </div>
    </div>
  );
};

export default NepaliDatePickerWrapper;
