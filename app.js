const distance = (a, b) => {
	//TODO: implementați funcția
	//TODO: implement the function
	
	if ((typeof a === 'string' || a instanceof String) && (typeof b === 'string' || b instanceof String)) {
		//here we create the vector
		const modif = [];
		//we populate it using fors
		for (let i = 0; i < a.length + 1; i++) {
			//we create a row for each column
		   const row = []
		   for (let j = 0; j < b.length + 1; j++) {
			//we populate it with 0,1,2... no of characters
			  row.push(j)
		   }
		   modif.push(row)
		}

		//i is for the letters of the first string
		for (let i = 1; i < a.length + 1; i++) {
			//j is for the letters of the second string
		   for (let j = 1; j < b.length + 1; j++) {

			 // If last characters of two strings are same ignore them and get count for remaining strings.
			  if (a[i - 1] === b[j - 1]) {
				 modif[i][j] = modif[i - 1][j - 1]
			  }
			  else {
				//we compute the cost for inserting, replacing and removing 
				//and then take the minimum value of those
				 modif[i][j] = 1 + Math.min(
					modif[i][j - 1], //insert
					modif[i - 1][j - 1], //replace
					modif[i - 1][j]) //remove
			  }
		   }
		}
		return modif[a.length][b.length]
	} else {
		throw new Error('InvalidType');
	}
	

}


module.exports.distance = distance