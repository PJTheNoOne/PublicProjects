---
grammerly: true
aliases: 
tags:
  - Project
publish: true
date created: Wednesday, August 30th 2023, 7:16:51 pm
---
![[InstalledNozeWipe.png]]
## About

A Voron 3D printer mod for cleaning the nozzle of the printer. It was designed to be simple and adjustable, providing a suitable nozzle cleaner. It used silicone wipes and a block for the [Blackbox 3D Printer](https://layershift.xyz/blackbox3dprinter/). 

You can learn more by looking at it on my [Github project](https://github.com/PJTheNoOne/NozeWipe).
## V2 Coming soon

I have been using a version 2 for several months without issue. The wipe and block now travel with the gantry behind the bed. This allows for the hot end to be parked on the block after the print is done. This uses lots of the same scripts allowing for easy upgrade. The expected release date is around Jan 2025.
## Motivation

I built my Voron with the [Voron-Tap](https://github.com/VoronDesign/Voron-Tap), [Nevermore](https://github.com/nevermore3d/Nevermore_Micro), and the [Kinematic Bed](https://github.com/tanaes/whopping_Voron_mods/tree/main/kinematic_bed) mods, instead of upgrading it over time. I noticed that z homing of the printer could be affected by any filament on the printer's nozzle. I decided to make my own Voron mod using existing silicon wipes for a different printer to solve this.
## Challenges
### Requirements
There were several design challenges and criteria that had to be met. First, the design must be printable. It's for a 3D-Printer so this is obvious. This means all parts must have a flat surface to print on and minimal overhangs.

The following requirement is cleaning the nozzle. The silicone wipes allow wiping the nozzle off while hot, and the block provides a place to heat up while stopping oozing. I chose the silicon parts because they already exist and have been proven to work. I decided not to use a [silicone brush ](https://www.printables.com/model/109349-silicone-brush-nozzle-scrubber-for-voron-24) because it would require finding that exact brush and did not allow for purging in a location that allowed for the removal of extruded filament. Finally, I chose not to use a brass brush because it could ablate the nozzles even with similar metals.

It must also be strong enough to be used repetitively and reliably. The NozeWipe does not experience much force, but because of the [Nevermore](https://github.com/nevermore3d/Nevermore_Micro) and adjust requirement, the mount is a lever arm and can cause the mount to bend.  

The NozeWipe is adjustable in two dimensions, z and y. It must be adjustable because I did not have a complete cad assembly for the Voron 2.4 that has a [Kinematic Bed](https://github.com/tanaes/whopping_Voron_mods/tree/main/kinematic_bed) modeled. It also allows for more flexibility in using different beds and surfaces.

---

![[FirstNW.png]]
The image above was the first iteration. I used a large mount arm and holder that would screw together. It did not allow for vertical adjustment. The section where the mount arm thinned near the top was to allow for clearance around the [Kinematic Bed](https://github.com/tanaes/whopping_Voron_mods/tree/main/kinematic_bed). The thin section allowed for excess flexibility when in use.

![[V2NW.png]]
The next iteration was to remove the flex in the arm. However, This decreases flexibility but adds complexity. It still has the screw-together mount. This was the cause of the next iteration. I could not effectively arrange the wipers and silicone blocks with heat-set inserts. The other deficit of this design is its complexity. It took more work to assemble and was overkill to hold the parts together.

![[V5NW.png]]
The second to last iteration improved the holder and mounting arm. The holder was simplified to allow friction fix of the wipers and to hot glue the silicone block into place. However, the holder had a fatal flaw. The wall of the outer wipe was too thin and broke during installation and use. The arm was significantly improved with features to increase stiffness in the arm but allow clearance for the [Kinematic Bed](https://github.com/tanaes/whopping_Voron_mods/tree/main/kinematic_bed). The bin in this design was never used.

![[V6NW.png]]
Here is the final design. The wall of the holder was thickened, and the main changes to the design were to the bin. The bin is now shorter and magnetically attached to the holder with ribbing to increase durability. However, the wall closest to the bed is still thin and brittle.
## Conclusion

The NozeWipe is one of the most polished projects I have completed. It's printable, adjustable, functional, and reliable. I can start a print and not worry about it starting and getting a perfect first layer. Furthermore, it looks like it belongs in my Voron; it is functionally beautiful. 

In the future, I would like to see if the wipe makes the Tap more reliable. I have not tested this because some other things add uncertainty to the measurements. I will have to track those problems down before testing for any improvements.
