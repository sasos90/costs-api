#!/bin/sh
# wait until Postgres is really available
maxcounter=50

set -e

db_host="$1"
db_port="$2"
shift 2
cmd="$@"

counter=1
until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$db_host" -U "$POSTGRES_USER" $POSTGRES_DB -c '\q'; do
  sleep 2
  counter=`expr $counter + 1`
  if [ $counter -gt $maxcounter ]; then
    >&2 echo "We have been waiting for Postgresql too long already; failing."
    exit 1
  fi;
done
echo "Database is up and running!"

exec $cmd
