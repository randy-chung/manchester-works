/**
 *
 * This app is intended to be run periodically (eg. by a cron job). It acts as the ETL
 * component of our app, and is responsible for the following functionality:
 *
 *  - Checks the DB to get the timestamp of the last-scraped reddit comment was.
 *  - Calls the reddit API to request new comments,
 *  - Parses the scraped data and stores the relevant data/metrics in our DB.
 *
 */

import { getData } from './app/api-reddit';

getData();
