---
aliases: 
tags: 
publish: false
date created: Friday, September 8th 2023, 5:36:34 pm
date modified: Friday, September 8th 2023, 9:18:02 pm
---
# Clean Metadata

``` Temp-arch
exiftool -recurse -overwrite_original -all= PublicProjects/
```

# Test
``` Temp-arch
npx quartz build --serve
```

# Sync
``` Temp-arch
npx quartz sync
```

# Theme
light mode
'text': '#0a0113',
'background': '#faf5fe',
'primary': '#640eaa',
'secondary': '#cfcfd6',
'accent': '#66319b',

darkmode
'text': '#f5f4f5',
'background': '#000000',
'primary': '#640eaa',
'secondary': '#0f100f',
'accent': '#b28bda',