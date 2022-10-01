from youtube_transcript_api import YouTubeTranscriptApi
import spacy
#https://www.youtube.com/watch?v=7y_2jQlnKag
#Introduction to Factoring Higher Degree Factorials
youtubeID = "7y_2jQlnKag"

transCpt = YouTubeTranscriptApi.get_transcript(youtubeID)
print(transCpt)

nlp = spacy.load('en_core_web_lg')
ans = ""
ansTime = 0.0
userQuery = input()
doc1 = nlp(userQuery)

for transcriptEntry in transCpt:
  transcriptEntry['text'].replace('\n', ' ')
  doc2 = nlp(transcriptEntry['text'])
  if doc1.similarity(doc2) > ansTime:
    ans = transcriptEntry['text']
    ansTime = transcriptEntry['start']

print(ans)
print(ansTime)