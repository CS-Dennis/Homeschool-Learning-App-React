export const randomNumList = (numbers) =>
{
  const nums = [];
  while(nums.length<numbers)
  {
    const newNumber = Math.floor(Math.random()*numbers)+1;
    if(nums.indexOf(newNumber)===-1)
    {
      nums.push(newNumber);
    }
  }    

  return nums;
}