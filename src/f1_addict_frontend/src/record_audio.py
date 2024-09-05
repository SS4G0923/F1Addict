from naoqi import ALProxy
import time

robot_ip = "http://169.254.30.168/"
port = 9559

audio_recorder = ALProxy("ALAudioRecorder", robot_ip, port)

audio_file_path = "/home/nao/my_audio.wav"

channels = [1, 1, 1, 1]
audio_format = "wav"
sample_rate = 16000

print("start recording...")
audio_recorder.startMicrophonesRecording(audio_file_path, audio_format, sample_rate, channels)

time.sleep(10)

audio_recorder.stopMicrophonesRecording()
print("recording stopped and saved to:", audio_file_path)
