/**
 * Turns a React component or stateless render function into a reactive component.
 */
//import React = require('react');
declare module mobxReact {
     function observer<P>(clazz: React.StatelessComponent<P>): React.ClassicComponentClass<P>;
     function observer<P>(renderFunction: (props: P) => React.ReactElement<any>): React.ClassicComponentClass<P>;
     function observer<P>(clazz: React.ClassicComponentClass<P>): React.ClassicComponentClass<P>;
     function observer<P>(clazz: React.ComponentClass<P>): React.ComponentClass<P>;
     function observer<TFunction extends React.ComponentClass<any>>(target: TFunction): TFunction; // decorator signature
}