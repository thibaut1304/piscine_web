#!/bin/bash

var="ex"

if [ $# -eq 0 ];then
	echo "No arguments supplied"
	exit 0
fi

for i in $@
do
	ret="$var$i"
	mkdir -p $ret
done
