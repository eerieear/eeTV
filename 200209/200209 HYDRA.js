{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
osc(20,0.05,()=>a.fft[0]*0.9)\
.kaleid(2)\
.modulateScale(shape(4,0.6,0.1),()=>a.fft[0])\
.modulate(shape(4,0.8,0.1))\
.blend(src(o0).scale(1.1),()=>a.fft[1])\
.repeat(()=>a.fft[2]*4)\
.rotate(1.57)\
// .kaleid(2)\
.mult(shape(4,0.5,0.2),()=>a.fft[2])\
.mult(shape(4,0.8,0.2),()=>a.fft[1])\
.modulateScale(noise(2,()=>a.fft[2]*2),0.1)\
.modulateScrollY(noise(2,()=>a.fft[0]*2),0.1)\
.modulateKaleid(noise(1,()=>a.fft[0]*4),0.1)\
.add(src(o0).scale(1.2),()=>a.fft[0]/4)\
.out()\
\
()=>a.fft[1]}