# Salesforce Batch Manager

This project is a way to manage, schedule, and control batch jobs that have scheduling needs outside of what Salesforce provides natively. It allows you to use custom metadata through a LWC UI to maintain the schedule and frequency of batch jobs in your org.

This primarily serves to stop configuring multiple batch jobs when you have a process that needs to run more than once per hour, and doesn't require an admin use the developer console to run anonymous apex to schedule the jobs via a cron. It also allows you to conditionally stop and start jobs without having to reschedule jobs through those methods.

The UI refreshes automatically every minute and provides you with the last run of each job. All dates and times are displayed in your local time while the configuration itself is maintained in UTC on the metadata record.
