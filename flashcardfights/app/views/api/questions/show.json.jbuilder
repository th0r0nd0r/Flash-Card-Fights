json.partial! "api/questions/question", question: @question

json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.partial! "api/answers/answer", answer: answer
    end
  end
end
