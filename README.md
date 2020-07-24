# RNWebView

##Para levantar este proyecto deberás tener:
 
Xcode versión 11.6
Android Studio 4.0.1
NodeJs 12.18.3
Watchman 4.9.0
 
##Para preparar el entorno sigue las indicaciones en:
 https://reactnative.dev/docs/environment-setup
 
Elegir la opciòn: React Native CLI Quickstart
 
En la terminal:
 'brew install node'
 'brew install watchman'
 
 Instalar Cocoapods en la terminal:
 sudo gem install cocoapods
 
 Instalar todas las dependencias poniendo en la terminal:
 yarn
 o
 yarn install
 
 Entrar a la carpeta ios y instalar los pod, en la terminal:
 cd ios
 pod install
 
 Regresar a la carpeta del proyecto:
 cd ..
 
 Correr el proyecto en ios:
 npx react-native run-ios
 
 Correrlo en Android:
 1. Abre el emulador android con el comando:
 /Users/[User Name]/Library/Android/sdk/emulator/emulator -avd Nexus_5_API_25 -netdelay none -netspeed full
 
 puede variar según tu emulador o ruta.
 
 2. En la termminal:
 npx react-native run-android
 
