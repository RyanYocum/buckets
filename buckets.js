
	const buck1 = parseInt(process.argv[2]);
	const buck2 = parseInt(process.argv[3]);
	const desired = parseInt(process.argv[4]);

	if (isNaN(buck1) || isNaN(buck2) || isNaN(desired)) {
		console.log("Please only enter numbers");
		return
	}

	// if the buckets are multiples of each other and the desired amount is not
	// the desired amount can never be reached
	if (buck1 % buck2 == 0 || buck2 % buck1 == 0) {
		if (desired % buck1 != 0 && desired % buck2 != 0) {
			console.log("current combination is impossible");
			return
		}
	}
	// if the desired amount is larger than either bucket it can never be reached
	if (desired > buck1 && desired > buck2) {
		console.log("current combination is impossible");
		return
	}
	function iterationCalc (startBucket, otherBucket) {
		var i = 0;
		// filled1 will have values 0 1 or 2
		// 0 means empty
		// 1 means partially full
		// 2 means full
		var filled1 = 0;
		var filled2 = false;
		var buck1Curr = 0;
		var buck2Curr = 0;
		// exits while loop once one of the buckets reaches the desired amount, or after 1000 iterations
		while (buck1Curr != desired && buck2Curr != desired && i < 1000) {
			// if the second bucket is full empty it
			if (filled2 == true) {
				filled2 = false;
				buck2Curr = 0;
				i++;
				continue
			}
			else {
				// if both buckets are empty, fill the first bucket
				if (filled1 == 0) {
					buck1Curr = startBucket;
					filled1 = 2;
					i++;
					continue;
				}
				// if bucket 1 is partially full transfer its contents to the second bucket
				else if (filled1 == 1) {
					if (buck1Curr <= otherBucket) {
						buck2Curr = buck1Curr;
						buck1Curr = 0;
						filled1 = 0;
						i++;
						continue;
					}
					// if that contents fills the bucket, leave the leftovers
					else {
						buck1Curr -= otherBucket;
						buck2Curr = otherBucket;
						filled2 = true;
						i++;
						continue
					}
				}
				// if the first bucket is full, use it to add water to the second
				else {
					if (buck1Curr + buck2Curr < otherBucket) {
						buck2Curr += buck1Curr;
						buck1Curr = 0;
						filled1 = 0;
						i++;
						continue;
					}
					// if not all the water can be placed in the second bucket, fill it and leave the leftovers
					if (buck1Curr + buck2Curr > otherBucket) {
						buck1Curr = buck1Curr + buck2Curr - otherBucket;
						buck2Curr = otherBucket;
						filled2 = true;
						filled1 = 1;
						i++
						continue;
					}
				}
			}
		}
		return i;
	}
	var first = iterationCalc(buck1, buck2);
	var second = iterationCalc(buck2, buck1);
	if (first < second) {
		var lowBuck = buck1;
		var low = first;
		var diff = second - first;
	}
	else if (first > second) {
		var lowBuck = buck2;
		var low = second;
		var diff = first - second;
	}
	else {
		console.log("Starting with either bucket takes " + first + " steps to get the target amount");
		return
	}
		console.log("Filling the " + lowBuck + " liter bucket first gets the target amount in " + low + " steps");
		console.log("It is faster than the other bucket by " + diff + " steps");
		return;
