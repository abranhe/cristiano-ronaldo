declare const cristianoRonaldo: {
	/**
  Get Cristiano Ronaldo stats.
  
	@returns current Cristiano Ronaldo stats.
	@example
	```
  import cristianoRonaldo from 'cristiano-ronaldo';
  
	(async () => {
    const cr7 = await cristianoRonaldo();
    // {
    //   goals: 716,
    //   assists: 220,
    //   apps: 991,
    //   penaltis: 118,
    //   penaltisMissed: 23,
    //   hatTricks: 56,
    //   goalRatio: 0.72
    // }
	})();
	```
	*/
  (): Promise<Object>;
};

export = cristianoRonaldo;