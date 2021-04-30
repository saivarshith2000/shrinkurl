#!/bin/sh
sleep 3

# Try to apply migration for 10 times with 2 sec intervals in between.
# If it still fails, that means connection to postgres database has failed.
echo "Attempting to run \"npm run migrate\"";
CMD="npm run migrate";
TIMES=1;
$CMD
while [ $? -ne 0 ]; do
    if [ $TIMES -gt 10 ];then
	echo "Failed to connect to database. The container will now terminate";
	exit -1;
    else
	sleep 2
	TIMES=$((TIMES+1))
	$CMD;
    fi
done
echo "\"npm run migrate\" successful";

npm start
