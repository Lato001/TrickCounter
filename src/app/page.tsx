"use client";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  ///CONTADORES
  const [counter, setCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  ///ESTADOS DE BUENAS, MALAS Y GANADOR
  const [ourGoods, setOurGoods] = useState<boolean>(false);
  const [theyGoods, setTheyGoods] = useState<boolean>(false);
  const [win, setWin] = useState<boolean | null>(null);

  const handleOurSum = () => {
    setCounter(counter + 1);
  };

  const handleOurRes = () => {
    if (!(counter === 0)) {
      setCounter(counter - 1);
    }
  };
  const handleTheySum = () => {
    setSecondCounter(secondCounter + 1);
  };

  const handleTheyRes = () => {
    if (!(secondCounter === 0)) {
      setSecondCounter(secondCounter - 1);
    }
  };

  const isGoods = () => {
    counter > 15 ? (setOurGoods(true), resetCounter()) : "";
    secondCounter > 15 ? (setTheyGoods(true), resetSecondCounter()) : "";
  };

  const isWin = () => {
    counter > 15 && ourGoods
      ? (setWin(true), console.log("Gano el jugador 1"))
      : secondCounter > 15 && theyGoods
        ? (setWin(true), console.log("Gano el jugador 2"))
        : "";
  };

  const resetCounter = () => {
    setCounter(0);
  };
  const resetSecondCounter = () => {
    setSecondCounter(0);
  };
  const resetGame = () => {
    setCounter(0);
    setSecondCounter(0);
    setOurGoods(false);
    setTheyGoods(false);
    setWin(false);
  };

  useEffect(() => {
    isGoods();
    isWin();
  }, [counter, secondCounter]);

  useEffect(() => {
    if (win) {
      resetGame();
    }
  }, [win]);

  return (
    <div className="flex items-center justify-evenly">
      <Card className="w-60 hover:cursor-pointer hover:border-white">
        <CardHeader>
          <CardTitle className="flex justify-center">Nosotros</CardTitle>
          <CardDescription className="flex justify-center">
            {ourGoods ? "Buenas" : "Malas"}
          </CardDescription>
          <CardDescription>Puntaje: {counter}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button onClick={handleOurSum}>Sumar</Button>
          <Button onClick={handleOurRes}>Restar</Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={resetCounter}>Reset</Button>
        </CardFooter>
      </Card>

      <Card className="w-60 hover:cursor-pointer hover:border-white ">
        <CardHeader>
          <CardTitle className="flex justify-center">Ellos</CardTitle>
          <CardDescription className="flex justify-center">
            {theyGoods ? "Buenas" : "Malas"}
          </CardDescription>
          <CardDescription>Puntaje: {secondCounter}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button onClick={handleTheySum}>Sumar</Button>
          <Button onClick={handleTheyRes}>Restar</Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={resetSecondCounter}>Reset</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
