import React from "react";

// Components own styles
import { AvailabilityChart, GridItem, SelectedCheck } from "./styles";

// ExpandedApplication styles:
import { ExtendedAppGroup, GroupTitle } from "../styles";

const Selected = () => {
  return (
    <SelectedCheck viewBox="0 0 24 24">
      <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
    </SelectedCheck>
  );
};

export default function Availability(props) {
  let shiftOneStart =
    Number(props.positionShiftTimes.shift_one_begin.split(":")[0]) % 12 || 12;
  let shiftOneStartAmPm =
    Number(props.positionShiftTimes.shift_one_begin.split(":")[0]) / 12 > 1
      ? "pm"
      : "am";
  let shiftOneEnd =
    Number(props.positionShiftTimes.shift_one_end.split(":")[0]) % 12 || 12;
  let shiftOneEndAmPm =
    Number(props.positionShiftTimes.shift_one_end.split(":")[0]) / 12 > 1
      ? "pm"
      : "am";
  let shiftTwoStart =
    Number(props.positionShiftTimes.shift_two_begin.split(":")[0]) % 12 || 12;
  let shiftTwoStartAmPm =
    Number(props.positionShiftTimes.shift_two_begin.split(":")[0]) / 12 > 1
      ? "pm"
      : "am";
  let shiftTwoEnd =
    Number(props.positionShiftTimes.shift_two_end.split(":")[0]) % 12 || 12;
  let shiftTwoEndAmPm =
    Number(props.positionShiftTimes.shift_two_end.split(":")[0]) / 12 > 1
      ? "pm"
      : "am";
  let shiftThreeStart =
    Number(props.positionShiftTimes.shift_three_begin.split(":")[0]) % 12 || 12;
  let shiftThreeStartAmPm =
    Number(props.positionShiftTimes.shift_three_begin.split(":")[0]) / 12 > 1
      ? "pm"
      : "am";
  let shiftThreeEnd =
    Number(props.positionShiftTimes.shift_three_end.split(":")[0]) % 12 || 12;
  let shiftThreeEndAmPm =
    Number(props.positionShiftTimes.shift_three_end.split(":")[0]) / 12 > 1
      ? "pm"
      : "am";

  return (
    <ExtendedAppGroup>
      <GroupTitle>Availability:</GroupTitle>
      <AvailabilityChart>
        {/* first row, setup*/}
        <GridItem align={"flex-end"} column={1} row={1}>
          SHIFT
        </GridItem>
        <GridItem align={"center"} column={2} row={1}>
          {`${shiftOneStart}${shiftOneStartAmPm} - ${shiftOneEnd}${shiftOneEndAmPm}`}
        </GridItem>
        <GridItem align={"center"} column={3} row={1}>
          {`${shiftTwoStart}${shiftTwoStartAmPm} - ${shiftTwoEnd}${shiftTwoEndAmPm}`}
        </GridItem>
        <GridItem
          align={"center"}
          column={4}
          row={1}
        >{`${shiftThreeStart}${shiftThreeStartAmPm} - ${shiftThreeEnd}${shiftThreeEndAmPm}`}</GridItem>

        {/* Monday Row */}
        <GridItem align={"flex-end"} column={1} row={2} line>
          Monday:
        </GridItem>
        <GridItem align={"center"} column={2} row={2} line>
          {props.availability.mon_first ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={3} row={2} line>
          {props.availability.mon_second ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={4} row={2} line>
          {props.availability.mon_third ? <Selected /> : null}
        </GridItem>

        {/* Tuesday Row */}
        <GridItem align={"flex-end"} column={1} row={3} line>
          Tuesday:
        </GridItem>
        <GridItem align={"center"} column={2} row={3} line>
          {props.availability.tues_first ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={3} row={3} line>
          {props.availability.tues_second ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={4} row={3} line>
          {props.availability.tues_third ? <Selected /> : null}
        </GridItem>

        {/* Wednesday Row */}
        <GridItem align={"flex-end"} column={1} row={4} line>
          Wednesday:
        </GridItem>
        <GridItem align={"center"} column={2} row={4} line>
          {props.availability.wed_first ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={3} row={4} line>
          {props.availability.wed_second ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={4} row={4} line>
          {props.availability.wed_third ? <Selected /> : null}
        </GridItem>

        {/* Thursday Row */}
        <GridItem align={"flex-end"} column={1} row={5} line>
          Thursday:
        </GridItem>
        <GridItem align={"center"} column={2} row={5} line>
          {props.availability.thurs_first ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={3} row={5} line>
          {props.availability.thurs_second ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={4} row={5} line>
          {props.availability.thurs_third ? <Selected /> : null}
        </GridItem>

        {/* Friday Row*/}
        <GridItem align={"flex-end"} column={1} row={6} line>
          Friday:
        </GridItem>
        <GridItem align={"center"} column={2} row={6} line>
          {props.availability.fri_first ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={3} row={6} line>
          {props.availability.fri_second ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={4} row={6} line>
          {props.availability.fri_third ? <Selected /> : null}
        </GridItem>

        {/* Saturday Row */}
        <GridItem align={"flex-end"} column={1} row={7} line>
          Saturday:
        </GridItem>
        <GridItem align={"center"} column={2} row={7} line>
          {props.availability.sat_first ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={3} row={7} line>
          {props.availability.sat_second ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={4} row={7} line>
          {props.availability.sat_third ? <Selected /> : null}
        </GridItem>

        {/* Sunday Row */}
        <GridItem align={"flex-end"} column={1} row={8}>
          Sunday:
        </GridItem>
        <GridItem align={"center"} column={2} row={8}>
          {props.availability.sun_first ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={3} row={8}>
          {props.availability.sun_second ? <Selected /> : null}
        </GridItem>
        <GridItem align={"center"} column={4} row={8}>
          {props.availability.sun_third ? <Selected /> : null}
        </GridItem>
      </AvailabilityChart>
    </ExtendedAppGroup>
  );
}
