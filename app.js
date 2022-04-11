/*
 * Complete the 'mostCommonWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING parrafo
 *  2. STRING_ARRAY palabrasNoPermitidas
 */

function mostCommonWord(parrafo, palabrasNoPermitidas) {
  let palabrasNoPermitidasUpper = [];
  parrafo = parrafo.toUpperCase();
  palabrasNoPermitidas.forEach((palabra) => {
    palabrasNoPermitidasUpper.push(palabra.toUpperCase());
  });

  const parrafo2 = parrafo.replaceAll(" ", ",");
  const parrafo3 = parrafo2.replaceAll(".", "");

  const arrayPalabras = parrafo3.split(",");
  let palabras = [];
  let counter = [];

  arrayPalabras.forEach((palabra) => {
    if (palabra !== "" && palabra !== palabrasNoPermitidasUpper[0]) {
      if (palabras.indexOf(palabra) < 0) {
        //no existe
        // sea agrega y se suma un counter
        palabras.push(palabra);
        counter.push({ palabra, count: 1 });
      } else {
        //ya existe
        counter[palabras.indexOf(palabra)].count =
          counter[palabras.indexOf(palabra)].count + 1;
      }
    }
  });

  let palabraReturnValue = 0;
  let indexPlabraReturn = 0;

  for (let index = 0; index < counter.length; index++) {
    const element = counter[index];
    if (element.count > palabraReturnValue) {
      palabraReturnValue = element.count;
      indexPlabraReturn = counter.indexOf(element);
    }
  }

  return counter[indexPlabraReturn].palabra;
}

function main() {
  const parrafo = "Bob hit a ball, the hit BALL flew long after it was hit.";
  const palabrasNoPermitidas = ["hit"];
  const parrafo2 = "a, a, a, a, b,b,b,c, c";
  const palabrasNoPermitidas2 = ["a"];
  const result = mostCommonWord(parrafo, palabrasNoPermitidas);
  console.log(result + "\n--------------");
  const result2 = mostCommonWord(parrafo2, palabrasNoPermitidas2);
  console.log(result2 + "\n--------------");
  return;
}

main();

/*
 * Complete the 'MaxProfit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING pricesAsString as parameter.
 */

function MaxProfit(pricesAsString) {
	const arrayPrecios = pricesAsString.split(',');
	let max = 0;

  for (let index = 0; index < arrayPrecios.length - 1; index++) {
		let ganancia = 0;
    const compro = arrayPrecios[index];
		for (let j = index; j < arrayPrecios.length - 1; j++) {
			const vendo = arrayPrecios[j];
			ganancia = vendo - compro;
			if (ganancia > 0) {
				if (ganancia > max) {
					max = ganancia;
				}
			}
		}
  }

	return max;
}

function main2() {
  var pricesAsString = "7,1,5,3,6,4";
  var result = MaxProfit(pricesAsString);
  // Valor esperado 5
  console.log(result + "\n--------------");

  pricesAsString = "2, 50, 10, 1, 11";
  result = MaxProfit(pricesAsString);
  // Valor esperado 48
  console.log(result + "\n--------------");

  pricesAsString = "7,6,4,3,1";
  result = MaxProfit(pricesAsString);
  // Valor esperado 0
  console.log(result + "\n--------------");
}

main2();
