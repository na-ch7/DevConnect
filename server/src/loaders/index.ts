import express from "./express";
import mongo from "./db";
import Express from "express";
import LoggerInstance from "./logger";

export default async ({
  expressApp,
}: {
  expressApp: Express.Application;
}): Promise<void> => {
  await mongo();
  LoggerInstance.info("MongoDB Intialized");
  await express({ app: expressApp });
  LoggerInstance.info("Express App Intialized");
  LoggerInstance.info("All modules loaded!");
};