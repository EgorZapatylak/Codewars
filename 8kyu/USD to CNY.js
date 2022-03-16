//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer,
// and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
    a = usd * 6.75;
    console.log(a.toFixed(2) + " Chinese Yuan");
}

usdcny(465);
usdcny(15);
usdcny(43);
usdcny(4);