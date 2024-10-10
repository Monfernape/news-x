"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { FilterIcon } from "@/components/icons/FilterIcon";

const SearchAndDatePickerModal = () => {
  const [value, setValue] = useState("");
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const router = useRouter();
  const applyFilter = () => {
    router.replace(
      `/search?query=${value}&fromDate=${format(
        date?.from || new Date(),
        "yyyy-MM-dd"
      )}&toDate=${date?.to ? format(date?.to, "yyyy-MM-dd") : ""}`
    );
  };
  const sectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
       <div className="flex gap-4">
       <Button variant="outline">
       <div className="flex gap-4 justify-center items-center">
       <p>
          Search
        </p>
         <FilterIcon />
       </div>
       </Button>
      
       </div>
      </DialogTrigger>
      <DialogContent className=" w-auto  sm:max-w-auto rounded p-4">
        <DialogHeader>
          <DialogTitle>Filter Post</DialogTitle>
          <DialogDescription>Filter the post by date</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Search</Label>
            <Input
              id="section"
              value={value}
              onChange={sectionChange}
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label>Date Range</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button id="date" variant={"outline"} className={""}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={applyFilter}>
              Apply
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchAndDatePickerModal;
