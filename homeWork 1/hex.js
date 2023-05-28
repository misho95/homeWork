( ()=> {

    const inputHex = document.querySelector('#hex');
    const inputRgb = document.querySelector('#rgb');


    inputHex.addEventListener('input', () => {

        const hexToRGB = hex => {
            let alpha = false,
              h = hex.slice(hex.startsWith('#') ? 1 : 0);
            if (h.length === 3) h = [...h].map(x => x + x).join('');
            else if (h.length === 8) alpha = true;
            h = parseInt(h, 16);
            return (
              'rgb' +
              (alpha ? 'a' : '') +
              '(' +
              (h >>> (alpha ? 24 : 16)) +
              ', ' +
              ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
              ', ' +
              ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
              (alpha ? `, ${h & 0x000000ff}` : '') +
              ')'
            );
          };

         const hexValue =  hexToRGB(inputHex.value);

          inputRgb.value = hexValue;
          
        
    });

    inputRgb.addEventListener('input', () => {

        function rgbToHex(r, g, b) {
            return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
          }

          let getNewValue = inputRgb.value;
          if(getNewValue.includes("rgb")){
            getNewValue = getNewValue.slice(3);
            getNewValue = getNewValue.replace("(", "");
            getNewValue = getNewValue.replace(")", "");
            getNewValue = getNewValue.trim();
            getNewValue = getNewValue.split(",");
            console.log(getNewValue);
          }

         const rgbValue = rgbToHex(getNewValue[0], getNewValue[1], getNewValue[2]);
         inputHex.value = rgbValue;

    })



})();

