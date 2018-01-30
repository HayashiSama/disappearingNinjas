$(".image").click( function()
{
	$(this).hide();
	console.log("image clicked");
});
$("#button1").click( function()
{
	$(".image").show();
	console.log("button 1 clicked");
});

console.log("zzz");