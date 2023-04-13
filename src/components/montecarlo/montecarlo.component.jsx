import Plot from "react-plotly.js";
import { layoutGenerator, traceGenerator } from "../../utils/plotly";
import { create, all } from "mathjs";

const mathjs = create(all);

const MonteCarloComponent = ({inf, sup, n, equation}) => {

    const generadorNumeros = (a, b, n) => {
        const numeros = [];
        console.log("a: " + a);
        console.log("b: " + b)
        for (var k=0; k<n; k++){
            numeros.push(Math.random() * (b-a) + a);

        }
        return numeros
    };

    const MonteCarloIntegration =(inf, sup, n, f) => {
         inf = parseFloat(inf);
         sup = parseFloat(sup);
         n = parseInt(n);
        console.log("Limite inferior: "+ inf);
        console.log("Limite superior: "+ sup);
        console.log("numero de x:" + n)
        let valuesX = [];
        let valuessY = [];
        let sum = 0;
        let numerosRandom = generadorNumeros(inf, sup, n);
        console.log("numeros random de verdad:"+numerosRandom)
        valuesX = numerosRandom;
        console.log("funcion: " + f )
        for (var k = 0; k<n; k++){
            var result = mathjs.evaluate(f,{x:numerosRandom[k]});
            valuessY.push(result)
            sum += result;
        }
        console.log("suma antes de cuenta: " + sum);
        return{
            result: (sup-inf)*sum/n,
            x: valuesX,
            y: valuessY
        };
    };

    const result = MonteCarloIntegration(inf, sup, n, equation)
    console.log("resultado: "+result.result)
    console.log("puntos x: " + result.x);
    console.log("puntos y: " + result.y);
    
    const trace = traceGenerator(
        result.x,
        result.y,
        "markers+text",
        "scatter",
        "Integral"
      );
    
      const layout = layoutGenerator("Integración por Monte Carlo");
    
      return (
        <div>
          <Plot
            data={[trace]}
            layout={layout}
            style={{ width: "50%", height: "50%" }}
          />
          <span>{result.result}</span>
        </div>
      );

     /* const MonteCarloIntegration =(inf, sup, n, f) => {
        inf = parseFloat(inf);
        sup = parseFloat(sup);
        n = parseInt(n);
        //console.log("Limite inferior: "+ inf);
        //console.log("Limite superior: "+ sup);
        //console.log("numero de x:" + n)
        let valuesX = [];
        let valuesY = [];


        for (var k=0; k<n; k++){
          valuesX.push(Math.random() * (sup-inf) + inf);
        }

        let yMax=0;
        let yMin = mathjs.evaluate(f,{x:inf})
        //console.log("evaluacion de x:"+ mathjs.evaluate(f,{x:0.5}))
        //console.log("valores de x: " + valuesX)
        for (var k=0; k<valuesX.length;k++){
          //console.log(mathjs.evaluate(f,{x:valuesX[k]})>yMax +"esto es el resul: " + mathjs.evaluate(f,{x:valuesX[k]}))
          if (mathjs.evaluate(f,{x:valuesX[k]})>yMax){
              yMax = mathjs.evaluate(f,{x:valuesX[k]})
          }else if (mathjs.evaluate(f,{x:valuesX[k]})<yMin);
              yMin = mathjs.evaluate(f,{x:valuesX[k]})
        }



        for (var i=0; i<n; i++){
          valuesY.push(Math.random() * (1-0)+0)
        }

        let sum = 0;

        for(var i=0; i<n; i++){
          if (valuesY[i]<=mathjs.evaluate(f,{x:valuesX[i]})){
            sum++;
          }
        }


        return {
          result: (sup - inf)*1*sum/n,
          x: valuesX,
          y: valuesY
        };

      };

    const result = MonteCarloIntegration(inf, sup, n, equation)
    console.log("resultado: "+result.result)
    console.log("puntos x: " + result.x);
    console.log("puntos y: " + result.y);
    
    const trace = traceGenerator(
        result.x,
        result.y,
        "markers+text",
        "scatter",
        "Integral"
      );*/
    
     // const layout = layoutGenerator("Integración por Monte Carlo");
    
      /*return (
        <div>
       
          <span>{result.result}</span>
        </div>
      );*/



};

export default MonteCarloComponent;
