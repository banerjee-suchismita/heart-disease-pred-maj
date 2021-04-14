import flask
import pickle
import pandas as pd

# Use pickle to load in the pre-trained model.
with open(f'model/heart_model_randomforest.pkl', 'rb') as f:
    model = pickle.load(f)

# declare constants
HOST = '0.0.0.0'
PORT = 8081

# Initializing the Flask application
app = flask.Flask(__name__)

# Predict API


@app.route('/api/predict', methods=['POST'])
def main():
    # if flask.request.method == 'GET':
    #     return(flask.render_template('main.html'))

    if flask.request.method == 'POST':
        print("request :", flask.request)

        parameters = flask.request.get_json(force=True)
        print("parameters : ", parameters)

        age = parameters['age']
        sex = parameters['sex']
        cp = parameters['cp']
        trestbps = parameters['trestbps']
        chol = parameters['chol']
        fbs = parameters['fbs']
        restecg = parameters['restecg']
        thalach = parameters['thalach']
        exang = parameters['exang']
        oldpeak = parameters['oldpeak']
        slope = parameters['slope']
        ca = parameters['ca']
        thal = parameters['thal']

        input_variables = pd.DataFrame([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]],
                                       columns=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg',
                                                'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'],
                                       dtype=int)
        # check
        print(input_variables)

        # storing result
        prediction = model.predict(input_variables)[0]

        # check
        print("pred", prediction)

        return str(prediction)


if __name__ == '__main__':
    # run web server
    app.run(host=HOST,
            debug=True,  # automatic reloading enabled
            port=PORT)
