#!/bin/sh
sleep 2

# Try to apply migration for 10 times with 2 sec intervals in between.
# If it still fails, that means connection to postgres database has failed.
echo "Attempting to run \"npm run migrate\""
CMD="npm run migrate"
TIMES=1
$CMD
while [ $? -ne 0 ]; do
    if [ $TIMES -gt 10 ]; then
        echo "Failed to connect to database. The container will now terminate"
        exit -1
    else
        sleep 5
        TIMES=$((TIMES + 1))
        $CMD
    fi
done
echo "\"npm run migrate\" successful"

# if "dev" or any argument is passed as first argument use nodemon instead of node.
# The production dockerfile will use node and development dockerfile will use nodemon
if [ $# -eq 0 ]; then
    echo "Running production server"
    npm start
else
    echo "Running development server"
    npm run dev
fi
