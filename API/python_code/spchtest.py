#test_gender.py
import os
import _pickle as cPickle
import numpy as np
from scipy.io.wavfile import read
import python_speech_features as mfcc
from sklearn import preprocessing
import warnings
warnings.filterwarnings("ignore")
#
# def myspf0med(m,p):
#     sound=p+"/"+m+".wav"
#     sourcerun=p+"/myspsolution.praat"
#     path=p+"/"
#     try:
#         objects= run_file(sourcerun, -20, 2, 0.3, "yes",sound,path, 80, 400, 0.01, capture_output=True)
#         print (objects[0]) # This will print the info from the sound object, and objects[0] is a parselmouth.Sound object
#         z1=str( objects[1]) # This will print the info from the textgrid object, and objects[1] is a parselmouth.Data object with a TextGrid inside
#         z2=z1.strip().split()
#         z3=int(z2[3]) # will be the integer number 10
#         z4=float(z2[9]) # will be the floating point number 8.3
#         print ("f0_MD=",z4,"# Hz global median of fundamental frequency distribution")
#     except:
#         z4=0
#         print ("Try again the sound of the audio was not clear")
#     return;

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

#path to testing data
sourcepath = "API/algoritmo/pygender/test_data/AudioSet/ejemplo/"
#path to saved models
modelpath  = "API/algoritmo/pygender/"

# myspsolution  = "pygender"

#
# gmm_files = [os.path.join(modelpath,fname) for fname in
#               os.listdir(modelpath) if fname.endswith('.gmm')]
# models    = [cPickle.load(open(fname,'rb')) for fname in gmm_files]
# genders   = [fname.split("/")[-1].split(".gmm")[0] for fname
#               in gmm_files]
# files     = [os.path.join(sourcepath,f) for f in os.listdir(sourcepath)
#               if f.endswith(".wav")]
#
# for f in files:
#     sr, audio  = read(f)
#     features   = get_MFCC(sr,audio)
#     # myspf0med(myspsolution,f.split("/")[-1])
#     scores     = None
#     log_likelihood = np.zeros(len(models))
#     for i in range(len(models)):
#         gmm    = models[i]         #checking with each model one by one
#         scores = np.array(gmm.score(features))
#         log_likelihood[i] = scores.sum()
#     winner = np.argmax(log_likelihood)
#     print(f.split("/")[-1] + " es " + genders[winner])
#     # print("\tdetected as - ", genders[winner],"\n\tscores:female ",log_likelihood[0],",male ", log_likelihood[1],"\n")
