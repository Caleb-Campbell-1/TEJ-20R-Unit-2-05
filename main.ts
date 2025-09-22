/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Sep 2025
 * This program gets the current temperature in K.
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// variables
let temperature: number
let temperatureKelvin: number

input.onButtonPressed(Button.A, function() {
  // input
  // get temperature value 
  temperature = input.temperature()

  // process  
  temperatureKelvin = temperature + 273

  // outputAnswer
  basic.clearScreen()
  basic.showString('Temperature is: ' + temperatureKelvin.toString() + ' K. ')
})