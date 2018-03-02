const React = require('react');
const PropTypes = require('prop-types');
const SimpleLayout = require('./components/SimpleLayout');

class QuestionsView extends React.Component {
  render() {
    const { currentUser } = this.props;

    return (
      <SimpleLayout currentUser={currentUser} pageStyles="/assets/dist/styles/claim-form.css">
        <div className="congrats-wrapper">
          <h2 className="congrats-wrapper__title">Tu reclamo ha sido registrado</h2>
          <p>Para ver en que estado se encuentra, puedes entrar a tu administrador cuando lo desees</p>
          <a className="odr-btn" href={`/user/${currentUser.username}`}>Ir al Administrador</a>
        </div>
      </SimpleLayout>
    );
  }
}

QuestionsView.defaultProps = {
  title: 'Default title',
};

QuestionsView.propType = {
  title: PropTypes.string,
  searchResults: PropTypes.object,
};

module.exports = QuestionsView;