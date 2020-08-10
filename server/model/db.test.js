const { MongoClient } = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(
      'mongodb://localhost:27017/quiz_db',
      {
        useNewUrlParser: true,
      }
    );
    db = await connection.db('Quizzes');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  afterEach(async () => {
    await db.collection('Quizzes').remove({ _id: 'quiz_id' });
  });

  it('should insert a doc into collection', async () => {
    const quizDb = db.collection('Quizzes');

    const mockQuiz = { _id: 'quiz_id', name: 'NameQuiz' };
    await quizDb.insertOne(mockQuiz);

    const insertedQuiz = await quizDb.findOne({ _id: 'quiz_id' });
    expect(insertedQuiz).toEqual(mockQuiz);
    await quizDb.remove({ _id: 'quiz_id' });
  });

  it('should delete a doc from the collection', async () => {
    const quizDb = db.collection('Quizzes');

    const mockQuiz = { _id: 'quiz_id', name: 'NameQuiz' };
    const insertedQuiz = await quizDb.insertOne(mockQuiz);
    // expect(insertedQuiz).not.toBeUndefined();

    expect(Object.keys(insertedQuiz).length).toBeGreaterThan(0);
    await quizDb.remove({ _id: 'quiz_id' });
    const returnObject = await quizDb.findOne({ _id: 'quiz_id' });
    expect(returnObject).toEqual(null);
  });
});
