import fs from 'node:fs';

const path = new URL('../src/main.tsx', import.meta.url);
let source = fs.readFileSync(path, 'utf8');

source = source.replace(/const WA='[^']*';/, "const WA='6283186714333';");
source = source.replace(/<strong>0?8186714333<\/strong>/, '<strong>083186714333</strong>');
source = source.replace(/<a href="https:\/\/maps\.google\.com\/\?q=Jl\.\+Sultan\+Ageng\+Tirtayasa,\+Cempaka\+Talun,\+Perumahan\+Green\+Kedaton\+Blok\+C\+No\.\+2" target="_blank"><MapPin\/><small>LOCATION<\/small><strong>Green Kedaton Blok C No\. 2<\/strong><\/a>/,
  '<a href="https://www.google.com/maps/search/?api=1&query=MOOBUN%20Susu%20Murni%20%26%20French%20Toast" target="_blank" rel="noreferrer"><MapPin/><small>LOCATION</small><strong>MOOBUN Susu Murni &amp; French Toast</strong></a>');

fs.writeFileSync(path, source);
