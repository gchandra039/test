command = ""
started = False
print("start = start the car")
print("stop = stopped the car")
while True:
  command = input("> ").lower()
  if command == "start":
     if started:
       print("car already started....")
     else:
       started = True
       print("car started..")
  elif command == "stop":
     if not started:
      print("car alredy stopped")
     else:
      started = False
      print("car stopped")
  elif command == "help":
    print("help")
  elif command == "quit":
    print("quit the program")
    break
  else:
    print("i can't")