---
grammerly: true
aliases: 
tags:
  - Project
publish: false
date created: Wednesday, August 30th 2023, 7:16:35 pm
date modified: Friday, September 8th 2023, 10:11:03 pm
---
# About
This project aims to make a DIY sail compass for racing. This compass should have distance to line, timing, logging, and compass features.
![[IMG_2905.jpeg]]
# Motivation
Why would someone not interested in sailing make a racing compass? It is because of two reasons. I wanted an exciting project and project that I could make with the components I had on hand. Luckily, I have a friend who is into sailing and would like one without paying for an expensive sail compass and knew this was a straightforward yet complex project. 

I was talking with said friend about wanting to start a project, and he suggested a racing compass for sailing. It combines several engineering disciplines that make it an exciting project. This project includes embedded systems, programming, electrical engineering, and mechanical engineering. This project contains all of these elements.


# Project outline
The compass must report the heading, distance from the line, and a race start timer. These requirements drive the components needed: a microcontroller, GPS module, compass, buttons, and a display. 

The final product must also be cheap, reproducible, and open source. These requirements work well with the underlying requirements for this project. Stuff I had lying around. I have several microcontrollers, electrical components, LCDs, and a GPS module from my FPV drones.

# Status
## Stage 1 - Gathering components and research
I chose to use a Raspberry Pi Pico for the microcontroller and [Flywoo GOKU GPS Module](https://www.getfpv.com/flywoo-goku-gm8-5883-v1-0-gps-module.html). The pi pico had more GPIO pins and better documentation than the XIAO ESP32C3 that was available. 

I wanted to do this project almost from scratch to learn as much as possible about the process. To accomplish this, I first need to learn to use CMake. I used Pico examples and other resources to add libraries and configure the project.

The first stage was to test the UART and I2C of the Flywoo Goku GPS Module. I first started with reading and printing the UART port using the onboard USB port. I used an interrupt and global buffer for testing. The output was printed directly to the USB's UART. Next, I did the same with the I2C using polling.
## Stage 2 - NMEA 0183 

While testing the UART communication between the GPS Module and the Pico, I saw that the UART output was encoded. I expected this but now need a way to process the information. I now needed to find a library to process it because I could make my own using [this documentation](https://www.sparkfun.com/datasheets/GPS/NMEA%20Reference%20Manual-Rev2.1-Dec07.pdf), but that is not the focus of the project. [This library](https://github.com/jacketizer/libnmea) is perfect for my application. It's small, simple, and modular.

## Stage 3 - Putting it all together
This is the stage I'm currently in. I knew I would need to have a scheduler for this project, but I have not yet added FreeRTOS to the project. Adding FreeRTOS required adding the FreeRTOS kernel to the CMake project and configuring the FreeRTOSConfig.h header file. The next step was changing the functions and setup to use FreeRTOS tasks. I discovered a problem between FreeRTOS and the Pico's UART interrupt handler. Using both will cause the Pico to hang. 

I suspect that the Pico gets stuck between context switches because two interrupts are using different methods in different critical sections. There are several potential ways to fix this problem switch:
Switch to polling for all data.
Fix the interrupt using semaphores and disabling scheduling.
Use some other real-time operating system like [the zephyrproject](https://www.zephyrproject.org/)
## Stage n
1. Proper debugging.
2. LCD
3. Start line support
4. Distance to start line
5. Housing
