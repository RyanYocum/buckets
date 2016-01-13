function () {
	const buck1 = parseInt(process.args[2]);
	const buck2 = parseInt(process.args[3]);
	const desired = parseInt(process.args[4]);

	// if the buckets are multiples of each other and the desired amount is not
	// the desired amount can never be reached
	if (buck1 % buck2 == 0 || buck2 % buck1 == 0) {
		if (desired % buck1 != 0 && desired % buck2 != 0) {
			return "current combination is impossible";
		}
	}
	// if the desired amount is larger than either bucket it can never be reached
	if (desired > buck1 && desired > buck2) {
		return "current combination is impossible"
	}
	function bleh (startBucket, otherBucket) {
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
					filled1 = true;
					i++;
					continue;
				}
				// else if (filled1 == 1) {
				// 	buck2Curr += buck
				}
				// if the first bucket is full, use it to add water to the second


					// var temp = transfer(buck1Curr, buck2Curr, startBucket, otherBucket)
					// buck1Curr = temp[0];
					// buck2Curr = 
				}
			}
			
		}
	}
	
}

function transfer (buck1Curr, buck2Curr, buck1Total, buck2Total) {
	var leftover = buck2Curr + buck1Curr - buck2Total
	var filled = false
	if (leftover < 0) {
		buck2Curr = buck1Curr + buck2Curr
	}
	if (leftover = 0) {

	}
	else {
		buck1Curr = leftover;
		buck2Curr = buck2Total;
	}
	return [buck1Curr, buck2Curr, filled];
}