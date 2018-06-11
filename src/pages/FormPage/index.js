/**
 * @author Pierre Segonne
 * Date: 17/04/2018
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
import SaveBar from '../../components/SaveBar';

class FormPage extends Component {
  componentWillMount() {
    this.props.setUpEditableForm();
  }
  
  render() {
    const {
      addChange,
      discardChanges,
      formView,
      formEdit,
      hasChanged,
      saveChanges,
    } = this.props;
    
    if (!formEdit || !formView) {
      return <span>LOADING</span>;
    }
    return (
      <div>
        <h1>{formView.title}</h1>
        {/* Title */}
        <TextInput
          handleChange={(newValue) => addChange('title', newValue)}
          title="Title"
          value={formEdit.title}
        />
        {/* Field */}
        <TextInput
          handleChange={(newValue) => addChange('field', newValue)}
          title="Random Field"
          value={formEdit.field}
        />
        <SaveBar
          onDiscardAction={discardChanges}
          open={hasChanged}
          onSaveAction={saveChanges}
        />
      </div>
    )
  }
}

FormPage.propTypes = {
  addChange: PropTypes.func.isRequired,
  discardChanges : PropTypes.func.isRequired,
  formView: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
  }),
  formEdit: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
  }),
  hasChanged: PropTypes.bool,
  saveChanges: PropTypes.func.isRequired,
  setUpEditableForm: PropTypes.func.isRequired,
};

FormPage.defaultProps = {
  formView: null,
  formEdit: null,
  hasChanged: true,
};

export default FormPage;
