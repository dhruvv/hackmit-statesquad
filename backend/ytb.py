import json
from urllib import response
from youtube_transcript_api import YouTubeTranscriptApi
from flask import Flask, request
import spacy
nlp = spacy.load('en_core_web_lg')
#https://www.youtube.com/watch?v=7y_2jQlnKag
#Introduction to Factoring Higher Degree Factorials

app = Flask(__name__)

@app.route("/match", methods = ["GET"])
def findBestMatch():
  youtubeID = request.args.get('yt_id')
  userQuery = request.args.get('q')
  transCpt = YouTubeTranscriptApi.get_transcript(youtubeID)
  ans = ""
  ansTime = 0.0
  doc1 = nlp(userQuery)
  for transcriptEntry in transCpt:
    transcriptEntry['text'].replace('\n', ' ')
    doc2 = nlp(transcriptEntry['text'])
    if doc1.similarity(doc2) > ansTime:
      ans = transcriptEntry['text']
      ansTime = transcriptEntry['start']
  return {'ans': ans, 'ansTime': ansTime}

if __name__ == '__main__':
  app.run(debug=True)