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
  const [win, setWin] = useState<boolean>(false);

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

  const isOurGoods = () => {
    counter > 15 ? setOurGoods(true) : setOurGoods(false);
  };

  const isWin = () => {
    counter > 29
      ? (setWin(true), console.log("Gano el jugador 1"))
      : secondCounter > 29
        ? (setWin(true), console.log("Gano el jugador 2"))
        : "";
  };

  useEffect(() => {
    isOurGoods();
    isWin();
  }, [counter, secondCounter]);

  return (
    <div className="flex items-center justify-evenly">
      <Card className="w-60">
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
      </Card>
      <Card className="w-60">
        <CardHeader>
          <CardTitle className="flex justify-center">Ellos</CardTitle>
          <CardDescription className="flex justify-center">
            {ourGoods ? "Buenas" : "Malas"}
          </CardDescription>
          <CardDescription>Puntaje: {secondCounter}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between">
          <Button onClick={handleTheySum}>Sumar</Button>
          <Button onClick={handleTheyRes}>Restar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
