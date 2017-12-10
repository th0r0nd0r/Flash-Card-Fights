json.partial! "api/questions/question", question: @question

json.answers do
  @question.answer.each do |answer|
    json.partial! "api/answer/answer", answer: answer
  end
end