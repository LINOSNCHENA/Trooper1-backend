exports.handler = async (event, context, callback) => {
  console.log("=============|CHANGING OF FUNCTION|===========")
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(({ up: true },{ Lusaka: true }, { Prague: "London" },{ Moscow: false },{ Stockholm: true }))
  }
}
