function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styles$2 = require('@material-ui/core/styles');
var Button = _interopDefault(require('@material-ui/core/Button'));
var Search = _interopDefault(require('@material-ui/icons/Search'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var DialogTitle = _interopDefault(require('@material-ui/core/DialogTitle'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Table = _interopDefault(require('@material-ui/core/Table'));
var TableBody = _interopDefault(require('@material-ui/core/TableBody'));
var TableCell = _interopDefault(require('@material-ui/core/TableCell'));
var TableContainer = _interopDefault(require('@material-ui/core/TableContainer'));
var TableHead = _interopDefault(require('@material-ui/core/TableHead'));
var TablePagination = _interopDefault(require('@material-ui/core/TablePagination'));
var TableRow = _interopDefault(require('@material-ui/core/TableRow'));

var useStyles = styles$2.makeStyles(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  };
});
function ContainedButtons() {
  var classes = useStyles();
  return /*#__PURE__*/React__default.createElement(Button, {
    className: classes.root,
    variant: "contained",
    color: "primary"
  }, "Primary");
}

var useStyles$1 = styles$2.makeStyles(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  };
});
function ContainedButtons$1() {
  var classes = useStyles$1();
  return /*#__PURE__*/React__default.createElement(Button, {
    className: classes.root,
    variant: "contained",
    color: "primary"
  }, "Primary");
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var root = {
	width: "40px",
	height: "40px",
	border: "1px solid #e9e9e9",
	borderRadius: "4px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#FFF",
	cursor: "pointer",
	"& svg": {
		color: "#a5a5a5"
	}
};
var style = {
	root: root
};

var useStyles$2 = styles$2.makeStyles(function (theme) {
  return style;
});

function SearchButton(props) {
  var classes = useStyles$2();

  var handleClick = function handleClick(evt) {
    if (props.onClick) props.onClick(evt);
  };

  return /*#__PURE__*/React__default.createElement("button", {
    className: classes.root,
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement(Search, null));
}

function FormPropsTextFields(props) {
  return /*#__PURE__*/React__default.createElement(TextField, _extends({}, props, {
    className: props.className,
    id: "outlined-search",
    type: "text",
    variant: "outlined",
    size: props.size
  }));
}

var styles = {
  root: {
    display: 'flex',
    '& > *': {
      margin: '8px'
    }
  },
  label: {
    display: 'flex',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    width: '120px'
  },
  input_nm: {
    width: '150px'
  }
};

var columns = [{
  id: 'name',
  label: 'Name',
  minWidth: 170
}, {
  id: 'code',
  label: "ISO\xA0Code",
  minWidth: 100
}, {
  id: 'population',
  label: 'Population',
  minWidth: 170,
  align: 'right',
  format: function format(value) {
    return value.toLocaleString('en-US');
  }
}, {
  id: 'size',
  label: "Size\xA0(km\xB2)",
  minWidth: 170,
  align: 'right',
  format: function format(value) {
    return value.toLocaleString('en-US');
  }
}, {
  id: 'density',
  label: 'Density',
  minWidth: 170,
  align: 'right',
  format: function format(value) {
    return value.toFixed(2);
  }
}];

function createData(name, code, population, size) {
  var density = population / size;
  return {
    name: name,
    code: code,
    population: population,
    size: size,
    density: density
  };
}

var rows = [createData('India', 'IN', 1324171354, 3287263), createData('China', 'CN', 1403500365, 9596961), createData('Italy', 'IT', 60483973, 301340), createData('United States', 'US', 327167434, 9833520), createData('Canada', 'CA', 37602103, 9984670), createData('Australia', 'AU', 25475400, 7692024), createData('Germany', 'DE', 83019200, 357578), createData('Ireland', 'IE', 4857000, 70273), createData('Mexico', 'MX', 126577691, 1972550), createData('Japan', 'JP', 126317000, 377973), createData('France', 'FR', 67022000, 640679), createData('United Kingdom', 'GB', 67545757, 242495), createData('Russia', 'RU', 146793744, 17098246), createData('Nigeria', 'NG', 200962417, 923768), createData('Brazil', 'BR', 210147125, 8515767)];
var useStyles$3 = styles$2.makeStyles({
  root: {
    width: '1300px'
  },
  container: {
    maxHeight: 440
  }
});
function StickyHeadTable() {
  var classes = useStyles$3();

  var _React$useState = React__default.useState(0),
      page = _React$useState[0],
      setPage = _React$useState[1];

  var _React$useState2 = React__default.useState(10),
      rowsPerPage = _React$useState2[0],
      setRowsPerPage = _React$useState2[1];

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return /*#__PURE__*/React__default.createElement(Paper, {
    className: classes.root
  }, /*#__PURE__*/React__default.createElement(TableContainer, {
    className: classes.container
  }, /*#__PURE__*/React__default.createElement(Table, {
    stickyHeader: true,
    "aria-label": "sticky table"
  }, /*#__PURE__*/React__default.createElement(TableHead, null, /*#__PURE__*/React__default.createElement(TableRow, null, columns.map(function (column) {
    return /*#__PURE__*/React__default.createElement(TableCell, {
      key: column.id,
      align: column.align,
      style: {
        minWidth: column.minWidth
      }
    }, column.label);
  }))), /*#__PURE__*/React__default.createElement(TableBody, null, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
    return /*#__PURE__*/React__default.createElement(TableRow, {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.code
    }, columns.map(function (column) {
      var value = row[column.id];
      return /*#__PURE__*/React__default.createElement(TableCell, {
        key: column.id,
        align: column.align
      }, column.format && typeof value === 'number' ? column.format(value) : value);
    }));
  })))), /*#__PURE__*/React__default.createElement(TablePagination, {
    rowsPerPageOptions: [10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage
  }));
}

var styles$1 = {
  root: {
    '& .MuiDialog-paperWidthSm': {
      maxWidth: 'none'
    }
  }
};

var FormDialog = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FormDialog, _Component);

  function FormDialog() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = FormDialog.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement(Dialog, {
      className: this.props.classes.root,
      open: this.props.open,
      onClose: this.props.onClose,
      "aria-labelledby": "form-dialog-title"
    }, /*#__PURE__*/React__default.createElement(DialogTitle, {
      id: "form-dialog-title"
    }, "Search"), /*#__PURE__*/React__default.createElement(DialogContent, null, /*#__PURE__*/React__default.createElement(StickyHeadTable, null)), /*#__PURE__*/React__default.createElement(DialogActions, null, /*#__PURE__*/React__default.createElement(Button, {
      onClick: this.props.onClose,
      color: "primary"
    }, "Cancel"), /*#__PURE__*/React__default.createElement(Button, {
      onClick: this.props.onClose,
      color: "primary"
    }, "Save")));
  };

  return FormDialog;
}(React.Component);

var BrandCodeSearchModal = styles$2.withStyles(styles$1)(FormDialog);

var BrandCode = /*#__PURE__*/function (_Component) {
  _inheritsLoose(BrandCode, _Component);

  function BrandCode(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleChange = function (key) {
      return function (evt) {
        console.log("### key: " + key + ", value: " + evt.target.value);
      };
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  var _proto = BrandCode.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var classes = this.props.classes;
    return /*#__PURE__*/React__default.createElement("div", {
      className: classes.root
    }, /*#__PURE__*/React__default.createElement("div", {
      className: classes.label
    }, "BRAND CODE"), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(FormPropsTextFields, {
      className: classes.input_nm,
      label: "BRAND ID",
      size: "small",
      onChange: this.handleChange('id')
    })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(FormPropsTextFields, {
      className: classes.input_nm,
      label: "BRAND NAME",
      size: "small",
      onChange: this.handleChange('name')
    })), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(SearchButton, {
      onClick: function onClick() {
        return _this2.setState({
          open: !_this2.state.open
        });
      }
    }, "CLICK"), /*#__PURE__*/React__default.createElement(BrandCodeSearchModal, {
      open: this.state.open,
      onClose: function onClose() {
        return _this2.setState({
          open: !_this2.state.open
        });
      }
    })));
  };

  return BrandCode;
}(React.Component);

var index = styles$2.withStyles(styles)(BrandCode);



var index$1 = {
  __proto__: null,
  SaveButton: ContainedButtons,
  CancelButton: ContainedButtons$1,
  BrandCode: index
};

exports.Components = index$1;
//# sourceMappingURL=index.js.map
