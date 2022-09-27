/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(["knockout",'ojs/ojarraydataprovider', 'ojs/ojpagingtabledatasource',
'ojs/ojtable', 'ojs/ojbutton', 'ojs/ojinputsearch', 'ojs/ojpagingcontrol', "ojs/ojformlayout", "ojs/ojinputtext", "ojs/ojselectsingle", "ojs/ojfilepicker", "ojs/ojaccordion", "ojs/ojdatetimepicker", "ojs/ojinputnumber", 'ojs/ojarraytabledatasource', "ojs/ojradioset"],
 function(ko,  ArrayDataProvider, PagingTableDataSource) {
    function DashboardViewModel() {
      let self = this;
      this.connected = () => {
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      self.rutinas = ko.observableArray([
        {
          dia:'',
          musculo:'',
          repeticiones:'',
          set:''
        },
        {
          dia:'',
          musculo:'',
          repeticiones:'',
          set:''
        },
        {
          dia:'',
          musculo:'',
          repeticiones:'',
          set:''
        },
        {
          dia:'',
          musculo:'',
          repeticiones:'',
          set:''
        },
        {
          dia:'',
          musculo:'',
          repeticiones:'',
          set:''
        },
        {
          dia:'',
          musculo:'',
          repeticiones:'',
          set:''
        },
        {
          dia:'',
          musculo:'',
          repeticiones:'',
          set:''
        },
      ]);
      self.pagingDataProviderRutinas = ko.pureComputed(function () {
        
        const arrayDataProvider = new oj.ArrayTableDataSource(self.rutinas, { idAttribute: 'dia' });
        return new PagingTableDataSource(arrayDataProvider);
      }, self);

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
