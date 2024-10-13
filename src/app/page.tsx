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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function HomePage() {
  ///COUNTERS
  const [counter, setCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  ///STATS GOODS, BADS, AND WIN
  const [ourGoods, setOurGoods] = useState<boolean>(false);
  const [theyGoods, setTheyGoods] = useState<boolean>(false);
  const [win, setWin] = useState<boolean | null>(null);

  const handleOurSum = () => {
    setCounter(counter + 1);
  };

  const handleOurRes = () => {
    if (!(counter === 0)) {
      setCounter(counter - 1);
    } else if (ourGoods) {
      setOurGoods(false);
      setCounter(15);
    }
  };
  const handleTheySum = () => {
    setSecondCounter(secondCounter + 1);
  };

  const handleTheyRes = () => {
    if (!(secondCounter === 0)) {
      setSecondCounter(secondCounter - 1);
    } else if (theyGoods) {
      setTheyGoods(false);
      setSecondCounter(15);
    }
  };

  const isGoods = () => {
    counter > 15 ? (setOurGoods(true), setCounter(0)) : "";
    secondCounter > 15 ? (setTheyGoods(true), setSecondCounter(0)) : "";
  };

  const isWin = () => {
    counter > 14 && ourGoods ? setWin(true) : secondCounter > 14 && theyGoods ? setWin(true) : "";
  };

  const resetOurStats = () => {
    setCounter(0);
    setOurGoods(false);
  };
  const resetTheyStats = () => {
    setSecondCounter(0);
    setTheyGoods(false);
  };

  const resetGame = () => {
    setCounter(0);
    setSecondCounter(0);
    setOurGoods(false);
    setTheyGoods(false);
    setWin(false);
  };

  function showWinDialog() {
    return (
      <AlertDialog open>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{counter === 15 ? "Our" : "They"} Wins </AlertDialogTitle>
            <AlertDialogDescription>To reset the party, press continue! </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={resetGame}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  useEffect(() => {
    isGoods();
    isWin();
  }, [counter, secondCounter]);

  useEffect(() => {
    if (win) {
    }
  }, [win]);

  return (
    <div>
      <div className="flex items-center justify-evenly">
        <Card className="w-60 border-gray-500 transition-all ease-in  hover:cursor-pointer hover:border-white hover:delay-100">
          <CardHeader>
            <CardTitle className="flex justify-center">Nosotros</CardTitle>
            <CardDescription className="flex justify-center">
              {ourGoods ? "Goods" : "Bads"}
            </CardDescription>
            <CardDescription>Score: {counter}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between">
            <Button className="bg-white text-black" variant="outline" onClick={handleOurRes}>
              Restar
            </Button>
            <Button className="bg-white text-black" variant="outline" onClick={handleOurSum}>
              Sumar
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-white text-black" variant="outline" onClick={resetOurStats}>
              Reset
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-60 border-gray-500 transition-all ease-in  hover:cursor-pointer hover:border-white hover:delay-100 ">
          <CardHeader>
            <CardTitle className="flex justify-center">Ellos</CardTitle>
            <CardDescription className="flex justify-center">
              {theyGoods ? "Goods" : "Bads"}
            </CardDescription>
            <CardDescription>Score: {secondCounter}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-between">
            <Button className="bg-white text-black" variant="outline" onClick={handleTheyRes}>
              Restar
            </Button>
            <Button className="bg-white text-black" variant="outline" onClick={handleTheySum}>
              Sumar
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-white text-black" variant="outline" onClick={resetTheyStats}>
              Reset
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center">{win ? showWinDialog() : ""}</div>
    </div>
  );
}
