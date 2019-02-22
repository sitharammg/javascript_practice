function Prime()
	{
    
    var number=document.debt.num.value;
    console.log(number)
		var i,flag=0;
		

		for(i=2; i <= number/2; i++)
		{
			if(number%i == 0)
			{
				flag = 1;
				break;
			}
		}
		if(flag == 0)
		{
			console.log("-The input number is Prime");
		}
		else
		{
			console.log("-The input number is not Prime");
    }
    alert("stop");
	}