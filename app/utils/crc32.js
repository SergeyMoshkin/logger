let table = new Uint32Array(256);

for(let i = 256; i--;) {
  var tmp = i;
  for(let k = 8; k--;)
  {
    tmp = tmp & 1 ? 3988292384 ^ tmp >>> 1 : tmp >>> 1;
  }

  table[i] = tmp;
}
export default function( data )
  {
    let crc = -1;

    for(let i = 0, l = data.length; i < l; i++)
    {
      crc = crc >>> 8 ^ table[ crc & 255 ^ data[i] ];
    }

    return (crc ^ -1) >>> 0;
  };
