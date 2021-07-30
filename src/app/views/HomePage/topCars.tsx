import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Car from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../responsive";
import carService from "../../services/carService";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopCars } from "./selectors";

const TopCarsContainer = styled.div`
  ${tw`
        flex
        flex-col
        items-center
        justify-center
        w-full
        max-w-screen-lg
        mb-28
        md:mb-36
    `}
`;
const Title = styled.h1`
  ${tw`
        text-3xl
        md:text-4xl
        lg:text-5xl
        font-extrabold
        text-black
    `}
`;
const CarsContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        justify-center
        w-full
        mt-7
        md:mt-10
    `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({ topCars }));

function TopCars() {
  const [currentIndex, setCurrentIndex] = useState("");
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  console.log(topCars);

  useEffect(() => {
    const fetchTopCars = async () => {
      const cars = await carService.getCars().catch((err) => {
        console.log(`Error`, err);
      });
      if (cars) setTopCars(cars);
    };
    fetchTopCars();
  }, [setTopCars]);

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const testCars = (!isEmptyTopCars && topCars.map((car) => <Car {...car} />)) || [];

  if (isEmptyTopCars) return null;
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={currentIndex}
          onChange={setCurrentIndex}
          slides={testCars}
          plugins={[
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots
          value={currentIndex}
          onChange={setCurrentIndex}
          number={isMobile ? testCars.length : testCars.length / 3}
        />
      </CarsContainer>
    </TopCarsContainer>
  );
}

export default TopCars;
