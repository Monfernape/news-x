import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { addDays, format, set } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useNewsContext } from "@/app/context/NewsContext";
import { DateRange } from "@/lib/types";

export const FilterModal = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const { searchQuery, setSearchQuery } = useNewsContext();

  const sectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const applyFilter = () => {
    setSearchQuery({
      query: searchQuery,
      fromDate: format(date?.from || new Date(), "yyyy-MM-dd"),
      toDate: date?.to ? format(date?.to, "yyyy-MM-dd") : "",
      section: value,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>Filter</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Post</DialogTitle>
          <DialogDescription>Filter the post by date</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name">Section</Label>
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
          <Button onClick={applyFilter}>Apply</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
