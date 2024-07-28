import type Express from 'express';
import initializeClient from './db';
import express from './express';
import LoggerInstance from './logger';

export default async ({
  expressApp,
}: {
  expressApp: Express.Application;
}): Promise<void> => {
  await initializeClient;
  LoggerInstance.info('Supabase Client Intialized');
  await express({ app: expressApp });
  LoggerInstance.info('Express App Intialized');
  LoggerInstance.info('All modules loaded!');
};
