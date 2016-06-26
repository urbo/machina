package com.wth.machina.activities;

import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.wth.machina.R;

import java.util.Date;

public class HomeActivity extends AppCompatActivity {

    private ReadBeaconTask mAuthTask = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        getWindow().getDecorView().setBackgroundResource(R.drawable.machina_tariffs);

        TextView txt = (TextView) findViewById(R.id.textView6);
        txt.setVisibility(View.GONE);

        mAuthTask = new ReadBeaconTask(true);
        mAuthTask.execute((Void) null);

        Button button = (Button) findViewById(R.id.button2);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                mAuthTask = new ReadBeaconTask(false);
                mAuthTask.execute((Void) null);
            }
        });

    }

    public class ReadBeaconTask extends AsyncTask<Void, Void, Boolean> {

        private final Boolean mResult;

        ReadBeaconTask(Boolean result) {
            mResult = result;
        }

        @Override
        protected Boolean doInBackground(Void... params) {
            // TODO: attempt authentication against a network service.

            try {
                // Simulate network access.
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                return false;
            }

            // TODO: read the beacon here.
            return mResult;
        }

        @Override
        protected void onPostExecute(final Boolean success) {
            mAuthTask = null;
            TextView txt = (TextView) findViewById(R.id.textView6);
            if (success) {
                getWindow().getDecorView().setBackgroundResource(R.drawable.machina_ok);
                txt.setVisibility(View.VISIBLE);
                txt.setText("BUS #54335 \n 1 ADULT \n CHECK-IN TIME: "+android.text.format.DateFormat.format("dd-MM-yyyy hh:mm:ss", new java.util.Date()));
            } else {
                txt.setVisibility(View.GONE);
                getWindow().getDecorView().setBackgroundResource(R.drawable.machina_wrong);
            }

        }

        @Override
        protected void onCancelled() {
            mAuthTask = null;
        }
    }
}
