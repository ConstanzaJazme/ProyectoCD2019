#test_gender.py
import os
import _pickle as cPickle
import numpy as np
from scipy.io.wavfile import read
import python_speech_features as mfcc
from sklearn import preprocessing
import parselmouth
from parselmouth.praat import call, run_file
import argparse
from pydub import AudioSegment
import warnings

warnings.filterwarnings("ignore")


def convert_to_wav(filename):
    formats_to_convert = ['.m4a','.mp3','ogg']
    dirpath='API/media'
    ten_seconds = 12* 1000     #El audio durará maximo 10 segundos
    if filename.endswith(tuple(formats_to_convert)):

        filepath = dirpath + '/' + filename
        (path, file_extension) = os.path.splitext(filepath)
        file_extension_final = file_extension.replace('.', '')
        try:
            if file_extension_final=='ogg':     #Se carga el archivo
                aux_track = AudioSegment.from_ogg(filepath)
                track = aux_track[:ten_seconds]
            else:
                aux_track = AudioSegment.from_file(filepath,
                        file_extension_final)
                track = aux_track[:ten_seconds]


            #Se hace convierte el audio a wav
            wav_filename = filename.replace(file_extension_final, 'wav')
            wav_path = dirpath + '/' + wav_filename
            file_handle = track.export(wav_path, format='wav')
            os.remove(filepath)
            #Se procesa el audio
            value= recognize_gender(wav_filename)
            hz=myspf0med(wav_filename,dirpath)
            result=get_age(hz,value)

            #Se remueven todos los archivos generados
            grid_name=filename.replace(file_extension_final, 'TextGrid')
            grid_path=dirpath + '/' + grid_name
            os.remove(grid_path)
            os.remove(wav_path)

            return value,result
        except:
            os.remove(filepath)
            return '0','0'


def direct_wav(filename):
    formats_to_convert = ['.wav']
    dirpath='API/media'
    if filename.endswith(tuple(formats_to_convert)):
        filepath = dirpath + '/' + filename
        (path, file_extension) = os.path.splitext(filepath)
        file_extension_final = file_extension.replace('.', '')
        try:
            value= recognize_gender(filename)
            hz=myspf0med(filename,dirpath)
            result=get_age(hz,value)

            grid_name=filename.replace(file_extension_final, 'TextGrid')
            grid_path=dirpath + '/' + grid_name
            os.remove(grid_path)

            os.remove(filepath)

            return value,result
        except:
            os.remove(filepath)
            return '0','0'

#Code: https://github.com/Shahabks/my-voice-analysis
# Rename folder M4a_files as wav_files

def myspf0med(m,p):
    sound=p+"/"+m
    sourcerun=p+"/myspsolution.praat"
    path=p+"/"
    try:
        objects= run_file(sourcerun, -20, 2, 0.3, "yes",sound,path, 80, 400, 0.01, capture_output=True)
        # print (objects[0]) # This will print the info from the sound object, and objects[0] is a parselmouth.Sound object
        z1=str( objects[1]) # This will print the info from the textgrid object, and objects[1] is a parselmouth.Data object with a TextGrid inside
        z2=z1.strip().split()
        z3=int(z2[3]) # will be the integer number 10
        z4=float(z2[9]) # will be the floating point number 8.3
        return z4# print ("f0_MD=",z4,"# Hz global median of fundamental frequency distribution")
    except:
        return z4;
        # print ("Try again the sound of the audio was not clear")
        
#Code: https://github.com/AkashPatel1/Speech_Predict
def get_age(hz,gender):
    if (gender=='mujer'):
        if (100<=hz<=110):
            return '15 a 29 años'
        if (295<=hz<=500):
            return '0 a 14 años'
        if (111<=hz<=128):
            return '30 a 59 años'
        if (160<=hz<=180):
            return '60 o más años'
        else:
            return 'Aún sin especificar'
    if (gender=='hombre'):
        if (110<=hz<=120):
            return '15 a 29 años'
        if (121<=hz<=550):
            return '0 a 14 años'
        if (111<=hz<=119):
            return '30 a 59 años'
        if (125<=hz<=147):
            return '60 o más años'
        else:
            return 'Aún sin especificar'


def get_MFCC(sr,audio):
    features = mfcc.mfcc(audio,sr, 0.025, 0.01, 13,appendEnergy = False)
    feat     = np.asarray(())
    for i in range(features.shape[0]):
        temp = features[i,:]
        if np.isnan(np.min(temp)):
            continue
        else:
            if feat.size == 0:
                feat = temp
            else:
                feat = np.vstack((feat, temp))
    features = feat;
    features = preprocessing.scale(features)
    return features




# myspsolution  = "pygender"

def recognize_gender(audio_name):
    #path to saved models
    modelpath  = "API/python_code/trained_models/"

    #path to testing data
    sourcepath = "API/media/"

    gmm_files = [os.path.join(modelpath,fname) for fname in
                  os.listdir(modelpath) if fname.endswith('.gmm')]
    models    = [cPickle.load(open(fname, 'rb'), encoding='latin1') for fname in gmm_files]
    genders   = [fname.split("/")[-1].split(".gmm")[0] for fname
                  in gmm_files]
    files     = [os.path.join(sourcepath,audio_name)]

    for f in files:
        sr, audio  = read(f)
        features   = get_MFCC(sr,audio)
        # myspf0med(myspsolution,f.split("/")[-1])
        scores     = None
        log_likelihood = np.zeros(len(models))
        for i in range(len(models)):
            gmm    = models[i]         #checking with each model one by one
            scores = np.array(gmm.score(features))
            log_likelihood[i] = scores.sum()
        winner = np.argmax(log_likelihood)
        return genders[winner]
        # print("\tdetected as - ", genders[winner],"\n\tscores:female ",log_likelihood[0],",male ", log_likelihood[1],"\n")
